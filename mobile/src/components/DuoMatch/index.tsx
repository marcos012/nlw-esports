import { MaterialIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { CheckCircle } from "phosphor-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator, Alert, Modal,
  ModalProps,
  Text,
  TouchableOpacity, View
} from "react-native";

import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { styles } from "./styles";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopyingToClipboard, setIsCopyingToClipboard] =
    useState<boolean>(false);

  const handleCopyDiscordUserToClipboard = async () => {
    setIsCopyingToClipboard(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord copiado!",
      "para colar no discord e encontrar este Duo!"
    );

    setIsCopyingToClipboard(false);
  };

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            ></MaterialIcons>
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          ></CheckCircle>

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          ></Heading>
          <Text style={styles.label}>Adicione no discord</Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipboard}
            disabled={isCopyingToClipboard}
          >
            <Text style={styles.discord}>
              {isCopyingToClipboard ? (
                <ActivityIndicator
                  color={THEME.COLORS.PRIMARY}
                ></ActivityIndicator>
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
